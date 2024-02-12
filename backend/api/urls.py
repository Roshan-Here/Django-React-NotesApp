from .views import (
        getRoutes,
        NoteListView,
        NoteCreateList,
        NoteDetailView,
        NoteUpdateView,
        NoteDeleteView,
    )

from django.urls import path


urlpatterns = [
    path('',getRoutes,name='start'),
    path('api/list',NoteListView.as_view(),name='note-list'),
    path('api/',NoteCreateList.as_view(),name='note-clist'),
    path('api/<int:pk>',NoteDetailView.as_view(),name='note-detailview'),
    path('api/<int:pk>/update',NoteUpdateView.as_view(),name='note-updateview'),
    path('api/<int:pk>/delete',NoteDeleteView.as_view(),name='note-deleteview'),    
]
