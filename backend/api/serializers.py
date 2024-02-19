from rest_framework import serializers
from .models import StudyDetail,SchoolDetail


class SchoolDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = SchoolDetail
        fields = '__all__'


class StudySerializer(serializers.ModelSerializer):
    # slug = serializers.SlugField(max_length=100,allow_blank=True)
    # collage_phn_no = serializers.SerializerMethodField()
    # collage_school_name = serializers.SerializerMethodField()
    collage = SchoolDetailSerializer( read_only=False)

    class Meta:
        model = StudyDetail
        fields = [
            'id',
            'collage',
            'student_name',
            'slug',
        ]

    def update(self, instance, validated_data):
        collage_data = validated_data.pop('collage')
        collage = instance.collage
        
        instance.student_name = validated_data.get('student_name',instance.student_name)
        instance.slug = validated_data.get('slug',instance.slug)
        instance.save()
        
        collage.school_name = collage_data.get(
            'school_name',
            collage.school_name
        )
        collage.save()
        
        return instance

    def create(self, validated_data):
        collage_data = validated_data.pop('collage')
        study_detail = StudyDetail.objects.create(**validated_data)
        collage_obj = SchoolDetail.objects.create(**collage_data)
        study_detail.collage = collage_obj
        study_detail.save()
        collage_obj.students.add(study_detail)
        return study_detail
        
    # def get_collage_school_name(self, obj):
    #     if obj.collage:
    #         return obj.collage.school_name
    #     else :
    #         return None
        
    # def get_collage_phn_no(self,obj):
    #     if obj.collage:
    #         return obj.collage.phn_no
    #     else:
    #         return None
        
    # tried to overrite
    # def to_internal_value(self, data):
    #     print(data.get('student_name','').replace(" ","_"))
    #     # data['slug'] = data.get('student_name','').replace(" ","_")
    #     if data.get('student_name',''):
    #         data['slug'] =data.get('student_name','').replace(" ","_")
    #     else:
    #         data['slug'] = None
    #     return super().to_internal_value(data)