using HomeWork0509.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HOmeWork0509.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PeopleCarController : ControllerBase
    {
        private string _connectionString;
        public PeopleCarController(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("ConStr");
        }
        [Route("getPeople")]
        
        public List<Person> GetPeople()
        {
            Repository repository = new Repository(_connectionString);
            return repository.GetPeople();
        }
        [Route("addAPerson")]
        
        public void AddPerson(Person person)
        {
            Repository repository = new Repository(_connectionString);
            repository.AddAPerson(person);
        }
        [Route("addACar")]

        public void AddCar(Car car)
        {
            Repository repository = new Repository(_connectionString);
            repository.AddACar(car);
        }
        [Route("getAPerson")]

        public Person GetPerson(int personId)
        {
            Repository repository = new Repository(_connectionString);
            return repository.GetPerson(personId);
        }
        [Route("getCars")]

        public List<Car> GetCars(int personId)
        {
            Repository repository = new Repository(_connectionString);
            return repository.GetCar(personId);
        }
        [Route("deleteCars")]

        public void deleteCars(int personId)
        {
            Repository repository = new Repository(_connectionString);
            repository.DeleteCar(personId);
        }
    }
}
