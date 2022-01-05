import { ITextRecording } from './interfaces/ItextRecording'

import iconv, { Options } from 'iconv-lite'

export class TextRecording implements ITextRecording {
  encode (content: any, encoding: string, options?: Options): Buffer {
    return iconv.encode(`${content.join(';')}\n`, encoding, options)
  }
}
