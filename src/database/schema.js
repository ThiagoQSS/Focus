import { appSchema, tableSchema } from '@nozbe/watermelondb';

export default appSchema({
  version: 1,
  tables: [
    tableSchema({
      name: 'notes',
      columns: [
        { name: 'title', type: 'string', isOptional: true },
        { name: 'body', type: 'string', isOptional: true },
        { name: 'type', type: 'string', isOptional: true }, // 'note', 'checklist', 'image'
        { name: 'image', type: 'string', isOptional: true },
        { name: 'created_at', type: 'number' },
        { name: 'updated_at', type: 'number' },
      ],
    }),
  ],
});
