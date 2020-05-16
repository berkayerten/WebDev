from django.shortcuts import render

def index(request):
    return render(request, 'polls/index.html', {})
def FAQ(request):
    return render(request, 'polls/FAQ.html',{})
def ContactUs(request):
    return render(request, 'polls/ContactUs.html',{})
def ComingSoon(request):
    return render(request, 'polls/ComingSoon.html',{})
def emailoffer(request):
    return render(request, 'polls/emailoffer.html',{})
def offer(request):
    return render(request, 'polls/offer.html',{})
def index2(request):
    return render(request, 'polls/index2.html',{})
def about(request):
    return render(request, 'polls/about.html',{})
def MegaMenu(request):
    return render(request, 'polls/MegaMenu.html',{})
def trafik(request):
    return render(request, 'polls/trafik.html',{})
def saglik(request):
    return render(request, 'polls/saglik.html',{})
def dask(request):
    return render(request, 'polls/dask.html',{})
def konut(request):
    return render(request, 'polls/konut.html',{})
def isyeri(request):
    return render(request, 'polls/isyeri.html',{})
def ferdi(request):
    return render(request, 'polls/ferdi.html',{})
def tarsim(request):
    return render(request, 'polls/tarsim.html',{})
def diger(request):
    return render(request, 'polls/diger.html',{})
def carousel(request):
    return render(request, 'polls/carousel.html',{})
def index3(request):
    return render(request, 'polls/index3.html',{})
