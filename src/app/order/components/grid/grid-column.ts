import { TemplateRef } from "@angular/core";

export class GridColumn {
    constructor({ fieldName, label, type, template }: { fieldName: string; label: string; type: ColumnType, template?: TemplateRef<any> }) {
        this.fieldName = fieldName;
        this.label = label;
        this.type = type;
        this.template = template;
    }

    fieldName: string;
    type: ColumnType;
    template: TemplateRef<any> | undefined;
    label: string;
}

export enum ColumnType {
    TEXT = 1,
    DATE = 2,
    TEMPLATE = 3
}