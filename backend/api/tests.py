from django.test import TestCase
from api.models import Teacher , Student , Justification
import pytest
import time
import json
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.support import expected_conditions
from selenium.webdriver.support.wait import WebDriverWait
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.desired_capabilities import DesiredCapabilities

class TestDamn():
  def setup_method(self, method):
    self.driver = webdriver.Chrome()
    self.vars = {}
  
  def teardown_method(self, method):
    self.driver.quit()
  
  def test_damn(self):
    self.driver.get("http://localhost:4200/Login")
    self.driver.set_window_size(1050, 743)
    self.driver.find_element(By.XPATH, "//input").send_keys("lokmane2")
    self.driver.find_element(By.XPATH, "//input[@type=\'password\']").send_keys("sadani1999")
    self.driver.find_element(By.CSS_SELECTOR, ".but-login").click()
    self.driver.find_element(By.CSS_SELECTOR, "li:nth-child(1) > .fullname").click()
    self.driver.find_element(By.XPATH, "//div[3]/button[2]/b").click()
    assert self.driver.switch_to.alert.text == "You want to delete the justification ?"
    self.driver.switch_to.alert.accept()
    self.driver.find_element(By.XPATH, "//li[1]").click()
    self.driver.find_element(By.XPATH, "//div[3]/button[2]/b").click()
    assert self.driver.switch_to.alert.text == "You want to delete the justification ?"
    self.driver.switch_to.alert.accept()
    self.driver.find_element(By.XPATH, "//button[2]/b").click()
  

class UserTestCase(TestCase):
    def setUp(self):
        Teacher.objects.create(username="lion", email="roar@esi.dz" , fullName='nabil')
        Student.objects.create(username="cat", email="meow@esi.dz", fullName='nabil2')
        teacher = Teacher.objects.get(username="lion")
        student = Student.objects.get(username="cat")
        Justification.objects.create(teacher=teacher , student =student , cause='what\'s up', image='')

    def test_teacher_created(self):
        teacher = Teacher.objects.get(username="lion")
        student = Student.objects.get(username="cat")
        self.assertEqual(teacher.fullName, 'nabil')
        self.assertEqual(student.fullName, 'nabil2')
    def test_justification_created(self):
        teacher = Teacher.objects.get(username="lion")
        student = Student.objects.get(username="cat")
        justification = Justification.objects.get(teacher=teacher , student=student)
        self.assertEqual(justification.cause ,'what\'s up' )