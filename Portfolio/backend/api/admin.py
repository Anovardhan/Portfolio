from django.contrib import admin
from .models import Myself,Education,About,Resume,ContactMessage,Project,Profile,ProfileImage

# Register your models here.

class ProfileImageInline(admin.TabularInline):
    model = ProfileImage
    extra = 1

@admin.register(Profile)
class ProfileAdmin(admin.ModelAdmin):
    inlines = [ProfileImageInline]


admin.site.register(Myself)
admin.site.register(Education)
admin.site.register(About)
admin.site.register(Resume)
admin.site.register(ContactMessage)
admin.site.register(Project)
admin.site.register(ProfileImage)

