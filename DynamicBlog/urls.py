from django.urls import path, include
from main.models import Blogs
from rest_framework import routers, serializers, viewsets

# Serializers define the API representation.
class BlogsSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Blogs
        fields = ['id','created', 'updated', 'data']

# ViewSets define the view behavior.
class BlogsViewSet(viewsets.ModelViewSet):
    queryset = Blogs.objects.all()
    serializer_class = BlogsSerializer

# Routers provide an easy way of automatically determining the URL conf.
router = routers.DefaultRouter()
router.register(r'blogs', BlogsViewSet)

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]