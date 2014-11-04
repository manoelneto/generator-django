class <%= _.classify(model) %>ViewSet(viewsets.ModelViewSet):

    serializer_class = <%= _.classify(model) %>Serializer
    model = <%= _.classify(model) %>

