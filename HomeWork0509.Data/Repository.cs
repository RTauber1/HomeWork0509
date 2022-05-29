using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HomeWork0509.Data
{
    public class Repository
    {
        private readonly string _connectionString;

        public Repository(string connectionString)
        {
            _connectionString = connectionString;
        }
        public List<Person> GetPeople()
        {
            PeopleCarsDataContext peopleCarsDataContext = new PeopleCarsDataContext(_connectionString);
            return peopleCarsDataContext.People.Include(p => p.Cars).ToList();
        }
        public void AddAPerson(Person person)
        {
            PeopleCarsDataContext peopleCarsDataContext = new PeopleCarsDataContext(_connectionString);
            peopleCarsDataContext.People.Add(person);
            peopleCarsDataContext.SaveChanges();
        }
        public void AddACar(Car car)
        {
            PeopleCarsDataContext peopleCarsDataContext = new PeopleCarsDataContext(_connectionString);
            peopleCarsDataContext.Cars.Add(car);
            peopleCarsDataContext.SaveChanges();
        }
        public Person GetPerson(int personId)
        {
            PeopleCarsDataContext peopleCarsDataContext = new PeopleCarsDataContext(_connectionString);
            return peopleCarsDataContext.People.FirstOrDefault(p=>p.Id==personId);
        }
        public List<Car> GetCar(int personId)
        {
            PeopleCarsDataContext peopleCarsDataContext = new PeopleCarsDataContext(_connectionString);
            return peopleCarsDataContext.Cars.ToList().FindAll(c => c.PersonId == personId);
            //return peopleCarsDataContext.Cars.ToList();
        }
        public void DeleteCar(int personId)
        {
            PeopleCarsDataContext peopleCarsDataContext = new PeopleCarsDataContext(_connectionString);
            peopleCarsDataContext.Database.ExecuteSqlInterpolated($"DELETE FROM Cars WHERE personId = {personId}"); 
            peopleCarsDataContext.SaveChanges();
        }
        //public List<Person> SerchPeople(string name)
        //{
        //    name.Split(" ");
        //    PeopleCarsDataContext peopleCarsDataContext = new PeopleCarsDataContext(_connectionString);
        //    var people = peopleCarsDataContext.Database.ExecuteSqlInterpolated($"select * from People where (FirstName like'%{name[0]}%' OR LastName like '%{name[0]}%' and FirstName like'%{name[1]}%' OR LastName like '%{name[1]}%')";
        //    return people;
        //}
    }
}


        


