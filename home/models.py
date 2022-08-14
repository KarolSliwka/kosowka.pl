from django.db import models


class AboutUs(models.Model):
    """ Model to display inforamtion in ABOUT US - HOME section """

    main_title = models.CharField(max_length=256, null=True, blank=True)
    main_image = models.ImageField(
        upload_to="images/gallery-home", null=True, blank=True)
    first_title = models.CharField(max_length=256, null=False, blank=True)
    first_paragraph = models.CharField(
        max_length=1000, null=False, blank=False)
    second_title = models.CharField(max_length=256, null=True, blank=True)
    second_paragraph = models.CharField(
        max_length=1000, null=True, blank=True)

    def __str__(self):
        return self.name


class HomeGallery(models.Model):
    """ Model to display few main images in GALLERY HOME section """

    gallery_image = models.ImageField(
        upload_to="images/gallery-home", null=True, blank=True)
