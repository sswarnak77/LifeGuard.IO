from django.conf.urls import url
from dashboard import views

app_name = 'dashboard'
urlpatterns = [
    url(r'^$', views.index, name='index')
]