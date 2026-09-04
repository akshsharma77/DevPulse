"""
DevPulse - Root URL Configuration
All API endpoints live under /api/
"""

from django.contrib import admin
from django.urls import path, include
from django.http import JsonResponse


def health_check(request):
    """Simple endpoint to confirm the backend is alive and reachable."""
    return JsonResponse({
        "status": "ok",
        "message": "DevPulse API running"
    })


urlpatterns = [
    # Django admin panel
    path('admin/', admin.site.urls),

    # Health check endpoint — used by frontend to confirm connection
    path('api/health/', health_check),

    # App-specific API routes (uncomment as each app's urls.py is created)
    # path('api/users/', include('users.urls')),
    # path('api/analytics/', include('analytics.urls')),
    # path('api/github/', include('github_data.urls')),
    # path('api/ai/', include('ai_engine.urls')),
]