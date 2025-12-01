from django.shortcuts import render
from rest_framework import generics
from .models import  Myself,Education,About,Resume,Project,ContactMessage,MyInformation,Skills
from .serializers import MyselfSerializers,EducationSerializer,AboutSerializer,ResumeSerializer,ProjectSerializer,ContactMessageSerializer,MyInformationSerializer,Skillserializer

# Create your views here.

class MyselfListCreateView(generics.ListCreateAPIView):
    queryset = Myself.objects.all()
    serializer_class = MyselfSerializers

class MyselfDetailView(generics.RetrieveUpdateDestroyAPIView):
     queryset = Myself.objects.all()
     serializer_class = MyselfSerializers


class EducationListCreateView(generics.ListCreateAPIView):
    queryset = Education.objects.all()
    serializer_class = EducationSerializer

class EducationDetailView(generics.RetrieveUpdateDestroyAPIView):
     queryset = Education.objects.all()
     serializer_class = EducationSerializer

class AboutListCreateView(generics.ListCreateAPIView):
    queryset = About.objects.all()
    serializer_class = AboutSerializer

class AbourDetailView(generics.RetrieveUpdateDestroyAPIView):
     queryset = About.objects.all()
     serializer_class = AboutSerializer


class ResumeListCreateView(generics.ListCreateAPIView):
    queryset = Resume.objects.all()
    serializer_class = ResumeSerializer

class ResumeDetailView(generics.RetrieveUpdateDestroyAPIView):
     queryset = Resume.objects.all()
     serializer_class = ResumeSerializer

class ProjectListCreateView(generics.ListCreateAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

class ProjectDetailView(generics.RetrieveUpdateDestroyAPIView):
     queryset = Project.objects.all()
     serializer_class = ProjectSerializer

class ContactMessageListCreateView(generics.ListCreateAPIView):
    queryset = ContactMessage.objects.all()
    serializer_class =ContactMessageSerializer

class ContactMessageDetailView(generics.RetrieveUpdateDestroyAPIView):
     queryset = ContactMessage.objects.all()
     serializer_class = ContactMessageSerializer

class MyInformationView(generics.ListCreateAPIView):
     queryset = MyInformation.objects.all()
     serializer_class = MyInformationSerializer
class MyInformationDetailView(generics.RetrieveUpdateDestroyAPIView):
     queryset = MyInformation.objects.all()
     serializer_class = MyInformationSerializer

class SkillView(generics.ListCreateAPIView):
     queryset = Skills.objects.all()
     serializer_class = Skillserializer
class SkillDetailView(generics.RetrieveUpdateDestroyAPIView):
     queryset = Skills.objects.all()
     serializer_class = Skillserializer





