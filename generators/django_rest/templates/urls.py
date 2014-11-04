router.register(
    r'<%= _.slugify(name) %>/<%= _.slugify(model) %>',
    <%= _.classify(model) %>ViewSet,
    'api-<%= _.slugify(name) %>-<%= _.slugify(model) %>'
)
