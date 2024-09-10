export interface IPosts {
    total_count: number;
    items: IPost[];
}

export interface IPost {
    title?: string;
    body?: string;
    created_at?: string;
    id?: number;
    number?: number;
    comments?: number;
    html_url?: string;
    user?: {
        login: string;
      }
}

  
  