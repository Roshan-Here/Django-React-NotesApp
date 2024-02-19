from django.shortcuts import render
from rest_framework import generics
# Create your views here.
from django.http import JsonResponse
# from .models import StudyDetail
# from .serializers import StudySerializer
from .models import Engineer
from .serializers import EngineerSerializer

def getRoutes(request):
    return JsonResponse("Starting..... ", safe=False)

class EngineerCreateView(generics.ListCreateAPIView):
    queryset = Engineer.objects.all()
    serializer_class = EngineerSerializer


# class StudyCreateView(generics.ListCreateAPIView):
#     queryset = StudyDetail.objects.all()
#     serializer_class = StudySerializer
    

# class StudyRetriveView(generics.RetrieveAPIView):
#     queryset = StudyDetail.objects.all()
#     serializer_class = StudySerializer
#     lookup_field = "slug"
    

    
# class StudyUpdateView(generics.UpdateAPIView):
#     queryset = StudyDetail.objects.all()
#     serializer_class = StudySerializer
#     lookup_field = "slug"
    
# class StudyDeletView(generics.DestroyAPIView):
#     queryset = StudyDetail.objects.all()
#     serializer_class = StudySerializer
#     lookup_field = 'slug'
    
#     def perform_destroy(self, instance):
#         return super().perform_destroy(instance)








