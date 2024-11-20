from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def read_root():
    return {"message": "Welcome to my interactive resume API!"}

@app.get("/resume")
def get_resume():
    return {
        "name": "Your Name",
        "job_title": "Your Job Title",
        "skills": ["Python", "Web Development", "3D Modeling"],
        "experience": [
            {"company": "Company A", "role": "Developer", "years": 2},
            {"company": "Company B", "role": "Intern", "years": 1},
        ],
    }

@app.get("/projects")
def get_projects():
    return [
        {"title": "Interactive Resume", "description": "A 3D resume website."},
        {"title": "Portfolio Website", "description": "My personal portfolio site."},
    ]