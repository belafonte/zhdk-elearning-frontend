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
