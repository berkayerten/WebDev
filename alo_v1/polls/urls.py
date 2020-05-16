from django.urls import path
from django.conf.urls import url, include
from . import views
# from .views import emailView, successView

urlpatterns = [
path('index', views.index, name='index'),
path('FAQ/',views.FAQ,name='FAQ'),
path('ContactUs/',views.ContactUs,name='ContactUs'),
path('',views.ComingSoon,name='ComingSoon'),
path('emailoffer/',views.emailoffer,name='emailoffer'),
path('offer/',views.offer,name='offer'),
# path('email/',emailView,name='email'),
# path('success/',successView,name='success'),
path('index2/',views.index2,name='index2'),
path('about/',views.about,name='about'),
path('MegaMenu/',views.MegaMenu,name='MegaMenu'),
path('trafik/',views.trafik,name='trafik'),
path('saglik/',views.saglik,name='saglik'),
path('dask/',views.dask,name='dask'),
path('ferdi/',views.ferdi,name='ferdi'),
path('konut/',views.konut,name='konut'),
path('isyeri/',views.isyeri,name='isyeri'),
path('tarsim/',views.tarsim,name='tarsim'),
path('diger/',views.diger,name='diger'),
path('carousel/',views.carousel,name='carousel'),
path('index3/',views.index3,name='index3')
]
