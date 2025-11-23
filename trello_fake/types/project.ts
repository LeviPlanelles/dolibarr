export interface Project {
    id: number;
    label: string;
    description?: string;
    status?: 'open' | 'archived' | 'closed';
}