from rest_framework import serializers

from .models import  Myself,Education,About,Resume,Project,ContactMessage,MyInformation, Skills

class MyselfSerializers(serializers.ModelSerializer):
    class Meta:
        model = Myself
        fields = '__all__'

class EducationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Education
        fields = '__all__'

class AboutSerializer(serializers.ModelSerializer):
    class Meta:
        model = About
        fields = '__all__'
class ResumeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Resume
        fields = '__all__'
class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = '__all__'

class ContactMessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactMessage
        fields = '__all__'

class MyInformationSerializer(serializers.ModelSerializer):
    class Meta:
        model = MyInformation
        fields = '__all__'

class Skillserializer(serializers.ModelSerializer):
    class Meta:
        model =Skills
        fields = '__all__'
