
from django.urls import path
from.views import MyselfListCreateView,MyselfDetailView , EducationListCreateView,EducationDetailView,AboutListCreateView,AbourDetailView,ResumeListCreateView,ResumeDetailView,ProjectListCreateView,ProjectDetailView,ContactMessageListCreateView,ContactMessageDetailView,MyInformationView,MyInformationDetailView,SkillView,SkillDetailView

urlpatterns = [
    path("myself/",MyselfListCreateView.as_view()),
    path("myself/<int:pk>/" ,MyselfDetailView.as_view()),


    path("education/",EducationListCreateView.as_view()),
    path("education/<int:pk>/" ,EducationDetailView.as_view()),


    path("about/",AboutListCreateView.as_view()),
    path("about/<int:pk>/" ,AbourDetailView.as_view()),


    path("resume/",ResumeListCreateView.as_view()),
    path("resume/<int:pk>/" ,ResumeDetailView.as_view()),



    path("project/",ProjectListCreateView.as_view()),
    path("project/<int:pk>/" ,ProjectDetailView.as_view()),

   path('contactmessage/', ContactMessageListCreateView.as_view()),
   path("contactmessage/<int:pk>/" , ContactMessageDetailView.as_view()),

   path('myinf/' ,MyInformationView.as_view()),
   path('myinf/<int:pk>/' , MyInformationDetailView.as_view()),

   path('skills/' , SkillView.as_view()),
   path('skills/<int:pk>/', SkillDetailView.as_view())
  




]