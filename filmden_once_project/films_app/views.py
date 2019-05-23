from django.shortcuts import render



def films_list(request):
    print(request.user)
    return render(request, "films_list.html")




def watch_list(request):
    print(request.user)
    return render(request, "films_list.html")