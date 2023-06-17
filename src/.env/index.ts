import { ENV_LOCAL } from './environment.local';

export interface APP_ENV_VARIABLES {
    APP_ENV: string;
    API_BASE: string; 
}

let ENV = ENV_LOCAL
 
export default ENV