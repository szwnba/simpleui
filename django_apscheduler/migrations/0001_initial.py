# Generated by Django 3.0.8 on 2020-08-03 02:53

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='DjangoJob',
            fields=[
                ('id', models.CharField(help_text='Unique id for this job.', max_length=255, primary_key=True, serialize=False)),
                ('next_run_time', models.DateTimeField(blank=True, db_index=True, help_text='Date and time at which this job is scheduled to be executed next.', null=True)),
                ('job_state', models.BinaryField()),
            ],
            options={
                'verbose_name_plural': '任務一覧',
                'ordering': ('next_run_time',),
            },
        ),
        migrations.CreateModel(
            name='DjangoJobExecution',
            fields=[
                ('id', models.BigAutoField(help_text='Unique ID for this job execution.', primary_key=True, serialize=False)),
                ('status', models.CharField(choices=[('Started execution', 'Started execution'), ('Error!', 'Error!'), ('Executed', 'Executed')], help_text='The current status of this job execution.', max_length=50)),
                ('run_time', models.DateTimeField(db_index=True, help_text='Date and time at which this job was executed.')),
                ('duration', models.DecimalField(decimal_places=2, default=None, help_text='Total run time of this job (in seconds).', max_digits=15, null=True)),
                ('finished', models.DecimalField(decimal_places=2, default=None, help_text='Timestamp at which this job was finished.', max_digits=15, null=True)),
                ('exception', models.CharField(help_text='Details of exception that occurred during job execution (if any).', max_length=1000, null=True)),
                ('traceback', models.TextField(help_text='Traceback of exception that occurred during job execution (if any).', null=True)),
                ('job', models.ForeignKey(help_text='The job that this execution relates to.', on_delete=django.db.models.deletion.CASCADE, to='django_apscheduler.DjangoJob')),
            ],
            options={
                'verbose_name_plural': '任務情報',
                'ordering': ('-run_time',),
            },
        ),
    ]
