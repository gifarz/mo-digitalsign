import { defineStore } from 'pinia'

interface EnvironmentState {
    environment: string | 'production';
}

export const useEnvironmentStore = defineStore('environmentStore', {
    state: (): EnvironmentState => ({
        environment: 'production',
    }),

    actions: {
        updateEnvironment(newEnvironment: string): void {

            this.environment = newEnvironment;            
        },
    },
});