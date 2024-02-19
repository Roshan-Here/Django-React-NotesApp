# from .views import (
#         StudyCreateView,
#         StudyRetriveView,
#         StudyUpdateView,
#         StudyDeletView
#     )
from .views import (
    EngineerCreateView,
    EngineerUpdateView,
    EngineerDeleteView,
    EngineerRetriveView
    )

from django.urls import path


urlpatterns = [
#     path('',StudyCreateView.as_view(),name='study-clist'),
    path('',EngineerCreateView.as_view(),name='Eng-clist'),
    path('<slug:slug>/update',EngineerUpdateView.as_view(),name='Eng-updateview'),
    path('<slug:slug>/delete',EngineerDeleteView.as_view(),name='Eng-deleteview'),
    path('<slug:slug>',EngineerRetriveView.as_view(),name='Eng-detailview'),
#     path('<slug:slug>',StudyRetriveView.as_view(),name='note-detailview'),
#     path('<slug:slug>/update',StudyUpdateView.as_view(),name='note-updateview'),
#     path('<slug:slug>/delete',StudyDeletView.as_view(),name='note-deleteview'),
    # path('',getRoutes,name='start'),
    # path('api/list',NoteListView.as_view(),name='note-list'),
    # path('api/<int:pk>/update',NoteUpdateView.as_view(),name='note-updateview'),
    # path('api/<int:pk>/delete',NoteDeleteView.as_view(),name='note-deleteview'),    
]
