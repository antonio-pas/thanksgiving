import { pgEnum, pgTable, text, varchar } from 'drizzle-orm/pg-core'
import { users } from './auth-schema'
import { nanoid } from 'nanoid'
export * from './auth-schema'

export const rooms = pgTable('rooms', {
  id: varchar()
    .$defaultFn(() => nanoid())
    .primaryKey(),
  userId: text('user_id')
    .notNull()
    .references(() => users.id, { onDelete: 'cascade' }),
})
export const images = pgTable('images', {
  id: varchar()
    .$defaultFn(() => nanoid())
    .primaryKey(),
  roomId: text('room_id')
    .notNull()
    .references(() => users.id, { onDelete: 'cascade' }),
})

export const dishType = pgEnum('dish', [
  'meat',
  'side',
  'salad',
  'dessert',
  'drink',
])

export const dishes = pgTable('dishes', {
  id: varchar()
    .$defaultFn(() => nanoid())
    .primaryKey(),
  type: dishType(),
  name: text(),
  roomId: text('room_id')
    .notNull()
    .references(() => users.id, { onDelete: 'cascade' }),
})
