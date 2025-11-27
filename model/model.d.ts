export declare class AppModel {
    static login: ({ username, password }: {
        username: string;
        password: string;
    }) => Promise<{
        user: any;
    }>;
    static register: ({ username, password }: {
        username: string;
        password: string;
    }) => Promise<{
        message: string;
    }>;
    static createConcept: ({ text, title, user_id }: {
        text: string;
        title: string;
        user_id: string;
    }) => Promise<{
        message: string;
    }>;
    static deleteConcept: ({ id }: {
        id: string;
    }) => Promise<{
        message: string;
    }>;
    static findConceptsByUser: ({ user_id }: {
        user_id: string;
    }) => Promise<{
        concepts: any;
    }>;
    static findConceptsByTitle: ({ title }: {
        title: string;
    }) => Promise<{
        concepts: any;
    }>;
}
//# sourceMappingURL=model.d.ts.map