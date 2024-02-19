from .views import (
        StudyCreateView,
        StudyRetriveView,
        StudyUpdateView,
        StudyDeletView
    )

from django.urls import path


urlpatterns = [
    path('',StudyCreateView.as_view(),name='study-clist'),
    path('<slug:slug>',StudyRetriveView.as_view(),name='note-detailview'),
    path('<slug:slug>/update',StudyUpdateView.as_view(),name='note-detailview'),
    path('<slug:slug>/delete',StudyDeletView.as_view(),name='note-detailview'),
    # path('',getRoutes,name='start'),
    # path('api/list',NoteListView.as_view(),name='note-list'),
    # path('api/<int:pk>/update',NoteUpdateView.as_view(),name='note-updateview'),
    # path('api/<int:pk>/delete',NoteDeleteView.as_view(),name='note-deleteview'),    
]
