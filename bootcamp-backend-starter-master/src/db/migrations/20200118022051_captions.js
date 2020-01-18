const { createTableIfNotExists } = require('../helpers')

exports.up = async knex => createTableIfNotExists(knex, 'captions', table => {
    table
        .uuid('id')
        .notNullable()
        .primary()
        .defaultTo(knex.raw('uuid_generate_v4()'))

    table
        .uuid('user_id')
        .references('user.id')
        .notNullable()

    table
        .uuid('image_id')
        .references('images.id')
        .notNullable()

    table.string('caption')
    
    table
        .integer('upvotes')
        .notNullable()
        .defaultTo(0)

    table.timestamp('createdAt').defaultTo(knex.fn.now())
    table.timestamp('updatedAt').defaultTo(knex.fn.now())
})

exports.down = async knex => knex.schema.dropTableIfExists('captions')