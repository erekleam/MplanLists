export interface SiteMapNode {
    name: string;
    cargoLink?: string;
    routerLink?: string;
    visibility: string[];
    new?: boolean;
    children?: SiteMapNode[];
}
export const siteMap: SiteMapNode[] = [
    {
        name: 'MplanDocs',
        visibility: [
            'FullAccess',
            'RoleStation',
            'Clamp',
            'Smgs',
            'Satvirtodeveloper',
            'adminsatvirto',
            'Memo',
            'RsUser',
            'RoleStationMemo',
        ],
        children: [
            {
                name: 'Mplan',
                visibility: ['FullAccess'],
                children: [
                    { name: 'MplanNew', routerLink: 'MPLAN', new: true, visibility: ['FullAccess'] },
                ],
            }
        ],
    }
];