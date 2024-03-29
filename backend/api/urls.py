from .views import (
        getRoutes,
        NoteListView,
        NoteCreate,
        NoteCreateList,
        NoteDetailView,
        NoteUpdateView,
        NoteDeleteView,
    )

from django.urls import path


urlpatterns = [
    path('',NoteCreateList.as_view(),name='note-clist'),
    # path('',getRoutes,name='start'),
    path('create',NoteCreate.as_view(),name='note-create'),
    path('list',NoteListView.as_view(),name='note-list'),
    path('<int:pk>',NoteDetailView.as_view(),name='note-detailview'),
    path('<int:pk>/update',NoteUpdateView.as_view(),name='note-updateview'),
    path('<int:pk>/delete',NoteDeleteView.as_view(),name='note-deleteview'),    
]
