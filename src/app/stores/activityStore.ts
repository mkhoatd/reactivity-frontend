import {makeAutoObservable, runInAction} from "mobx";
import {Activity} from "../models/activity";
import agent from "../api/agent";
import {v4 as uuid} from 'uuid'

export default class ActivityStore {
  activityRegistry = new Map<string, Activity>();
  selectedActivity: Activity | undefined = undefined;
  editMode = false;
  loading = false;
  loadingInitial = true;

  constructor() {
    makeAutoObservable(this);
  }

  get activitiesByDate() {
    return Array
      .from(this.activityRegistry.values())
      .sort((a, b) => Date.parse(a.date) - Date.parse(b.date))
  }

  loadActivities = async () => {
    try {
      const response = await agent.Activities.list();
      response.forEach(activity => {
        activity.date = activity.date.split('T')[0];
        this.activityRegistry.set(activity.id, activity);
      })
      this.setLoadingInitial(false)
    } catch (e) {
      console.log(e);
      this.setLoadingInitial(false)
    }
  }

  setLoadingInitial = (state: boolean) => {
    this.loadingInitial = state
  }

  selectActivity = (id: string) => {
    this.selectedActivity = this.activityRegistry.get(id);
  }

  cancelSelectActivity = () => {
    this.selectedActivity = undefined;
  }

  openForm = (id?: string) => {
    id ? this.selectActivity(id) : this.cancelSelectActivity();
    this.editMode = true
  }

  closeForm = () => {
    this.editMode = false
  }

  setLoading = (state: boolean) => {
    this.loading = state;
  }

  createActivity = async (activity: Activity) => {
    this.setLoading(true);
    activity.id = uuid();
    try {
      await agent.Activities.create(activity);
      runInAction(() => {
        this.activityRegistry.set(activity.id, activity);
        this.selectedActivity = activity;
        this.editMode = false;
        this.loading = false;
      })
    } catch (e) {
      console.log(e);
      runInAction(() => {
        this.loading = false;
      })
    }
  }

  updateActivity = async (activity: Activity) => {
    this.loading = true;
    try {
      await agent.Activities.update(activity);
      runInAction(() => {
        this.activityRegistry.set(activity.id, activity);
        this.selectedActivity = activity;
        this.loading = false;
      })
    } catch (e) {
      console.log(e);
      runInAction(() => {
        this.loading = false;
      })
    }
  }

  deleteActivity = async (id: string) => {
    this.loading = true;
    try {
      await agent.Activities.delete(id);
      runInAction(() => {
        this.activityRegistry.delete(id);
        if (this.selectedActivity?.id === id) this.cancelSelectActivity();
        this.setLoading(false);
      })
      this.setLoading(false);
    } catch (e) {
      console.log(e);
      this.setLoading(false);
    }
  }
}