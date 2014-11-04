class <%= _.classify(model) %>Serializer(serializers.ModelSerializer):
    
    class Meta:
        model = <%= _.classify(model) %>

