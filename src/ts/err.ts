export enum ErrType {
  NO_QUERY = 'NO_QUERY',
  INVALID_TYPE = 'INVALID_TYPE',
  NO_ID = 'NO_ID',
  NOT_FOUND = 'NOT_FOUND',
  WRONG_LANG_CODE = 'WRONG_LANG_CODE',
  WRONG_ID = 'WRONG_ID',
  INVALID_REQ_METHOD = 'INVALID_REQ_METHOD'
}

export interface Error {
  detail: string;
  type: ErrType;
}
