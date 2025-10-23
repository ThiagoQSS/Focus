import { Model } from '@nozbe/watermelondb'
import { date, field, readonly, text } from '@nozbe/watermelondb/decorators'

export default class Note extends Model {
  // Nome da tabela que este Model representa
  static table = 'notes'

  // Columns
  @text('title') title
  @text('body') body
  @text('type') type // 'note', 'checklist', 'image'
  @field('image') image
  // Relations

  // ReadOnly
  @readonly @date('created_at') createdAt
  @readonly @date('updated_at') updatedAt

}

export const NoteTypes = Object.freeze({
  NOTE: 'note',
  CHECKLIST: 'checklist',
  IMAGE: 'image',
}) 