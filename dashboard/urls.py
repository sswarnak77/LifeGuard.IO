from django.conf.urls import url
from dashboard import views

app_name = 'dashboard'
urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^matters/$', views.MatterList.as_view(), name="get_matters"),
    url(r'^matters/(?P<pk>[0-9]+)/$', views.MatterDetail.as_view(), name="matter_detail")
]