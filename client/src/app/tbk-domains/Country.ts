export class Country {

    constructor(	public code: string,
                    public type: number,
                    public name_fr: string | undefined,
                    public parent?: string | undefined,
                    public name_en?: string | undefined,
                    public m49?: string | undefined
                    )
    {

    }
}