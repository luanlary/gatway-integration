import { ITextRecording } from './textRecording/interfaces/ItextRecording'

export const ExportUtils = {
  writeFile (values: any, textRecording: ITextRecording): Buffer {
    return textRecording.encode(`${values.join(';')}\n`, 'utf-16be')
  }
}
