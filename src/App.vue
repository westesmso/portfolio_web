<script setup>
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import AcademicSection from './components/AcademicSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import ExtensionCoursesSection from './components/ExtensionCoursesSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import FooterSection from './components/FooterSection.vue'

import profile from './data/profile.json'
import jobs from './data/jobs.json'
import courses from './data/courses.json'
import projects from './data/projects.json'
</script>

<template>
  <div class="min-h-screen bg-slate-950">
    <NavBar />
    <HeroSection :profile="profile" />
    <AcademicSection :course="profile.course" :languages="profile.languages" />
    <ExperienceSection :jobs="jobs" />
    <ExtensionCoursesSection :courses="courses" />
    <ProjectsSection :projects="projects" />
    <FooterSection :name="profile.name" />
  </div>
</template>
