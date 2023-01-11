export interface User {
    username:   string;
    email:      string;
    password?:   string;
    confirm?:    string;
    suscript:   boolean;
    country:       string;
    city:     string;
    registered?: boolean;
    id?:         number;
}
