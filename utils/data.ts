import { ReactFlowJsonObject } from 'reactflow';
import { loadFromBlob, normalizeFile } from './blob';
import { EXPORT_DATA_TYPES, MIME_TYPES } from './constants/export';
import { fileOpen, fileSave } from './filesystem';
import { Config, ExportedDataState, ImportedDataState, MapState } from './types';

export const serializeAsJSON = (map: MapState, version: string, config: Config | undefined): string => {
	const data: ExportedDataState = {
		type: EXPORT_DATA_TYPES.MindList,
		version,
		map,
		config,
	};

	return JSON.stringify(data, null, 2);
};

export const saveAsJSON = async (name: string, version: string, map: MapState, config: Config | undefined) => {
	const serialized = serializeAsJSON(map, version, config);
	const blob = new Blob([serialized], {
		type: MIME_TYPES.MindList,
	});

	const fileHandle = await fileSave(blob, {
		name,
		extension: 'MindList',
		description: 'MindList AI file',
	});

	return { fileHandle };
};

export const loadFromJSON = async (): Promise<ImportedDataState> => {
	const file = await fileOpen({
		description: 'MindList AI files',
	});

	return loadFromBlob(await normalizeFile(file));
};
