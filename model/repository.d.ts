export declare class Repository {
    static login: ({ username }: {
        username: string;
    }) => Promise<any>;
    static register: ({ username, password }: {
        username: string;
        password: string;
    }) => Promise<void>;
    static createConcept: ({ text, title, user_id }: {
        text: string;
        title: string;
        user_id: string;
    }) => Promise<void>;
    static deleteConcept: (id: string) => Promise<void>;
    static findConcepsByUser: (userId: string) => Promise<any>;
    static findConceptsByTitle: (title: string) => Promise<any>;
}
//# sourceMappingURL=repository.d.ts.map