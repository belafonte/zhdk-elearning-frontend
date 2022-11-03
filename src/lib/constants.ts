// grid settings interface
export interface IGridSettings {
	type: string;
	minWidth: number;
	gridCols: number;
	colWidth: number;
	colStart: number;
	colsEnd: number;
	barCount: number;
	headerHeight: number;
}

export const gridSettingsKey = Symbol();

export interface ICategory {
	category: string;
	title: string;
	color: { color: [5] };
}

export interface ITileData {
	_id: string;
	color: { colors: [string] };
	title: string;
	category: string;
	mask: string;
	title_image: string;
	tags: [string];
	rotation: string;
}

export interface IDetailData extends ITileData {
	body: string;
	image: [];
}
