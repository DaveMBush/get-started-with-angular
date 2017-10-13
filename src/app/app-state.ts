import { EditState } from './routes/edit/edit-state';
import { ListState } from './routes/list/list-state';
import { SharedState } from './shared/shared-state';

export interface AppState {
    shared: SharedState
    list: ListState;
    edit: EditState
}
