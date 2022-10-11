// grid settings interface
export interface IGridSettings {
	type: string;
	minWidth: number;
	gridCols: number;
	colWidth: number;
	colStart: number;
	height: number;
}

export const gridSettingsKey = Symbol();

export interface ICategory {
	category: string;
	title: string;
	color: { color: [5] };
}
