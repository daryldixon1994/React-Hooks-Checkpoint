import django from "../RS/django.jpg";
import hatefuleight from "../RS/hatefuleight.jpg";
import hollywood from "../RS/hollywood.png";
import inglorious from "../RS/inglorious.jpg";
import killbill from "../RS/killbill.jpg";
import killbilltwo from "../RS/killbilltwo.jpg";
import pulpfiction from "../RS/pulpfiction.jpg";
import jackiebrown from "../RS/jackiebrown.jpg";
import dogs from "../RS/dogs.jpg";
import deathproof from "../RS/deathproof.jpg";
import trainingday from "../RS/training-day.jpg";
import fences from "../RS/fences.jpg";

export const movieList = [
    {
        title: "Django Unchained",
        category: "Western",
        id: Math.random(),
        rate: 8,
        cover: django,
        cast: "Jamie Foxx, Leonardo DiCaprio, Christoph Waltz",
        release: "2012-12-25, ",
    },
    {
        title: "The Hateful Eight",
        category: "Mistery",
        id: Math.random(),
        rate: 7,
        cover: hatefuleight,
        cast: "Samuel L.Jackson, Kurt Russel",
        release: "2015-12-30, ",
    },
    {
        title: "Once Upon a Time in Hollywood",
        category: "Drama",
        id: Math.random(),
        rate: 7,
        cover: hollywood,
        cast: "Leonardo DiCaprio, Brad Pitt, Margot Robbie",
        release: "2019-07-26, ",
    },
    {
        title: "Inglourious Basterds",
        category: "War",
        id: Math.random(),
        rate: 8,
        cover: inglorious,
        cast: " Brad Pitt, Diane Kruger, Eli Roth",
        release: "2009-08-20, ",
    },
    {
        title: "Kill Bill Vol. 1",
        category: "Crime",
        id: Math.random(),
        rate: 9,
        cover: killbill,
        cast: " Uma Thurman, David Carradine, Daryl Hannah",
        release: "2003-10-10,",
    },
    {
        title: "Pulp Fiction",
        category: "Drama",
        id: Math.random(),
        rate: 9,
        cover: pulpfiction,
        cast: "John Travolta, Uma Thurman, Samuel L. Jackson",
        release: "1994-10-14, ",
    },
    {
        title: "Jackie Brown",
        category: "Crime",
        id: Math.random(),
        rate: 6,
        cover: jackiebrown,
        cast: "Pam Grier, Samuel L. Jackson, Robert Forster",
        release: "1997-12-25, ",
    },
    {
        title: "Kill Bill 2",
        category: "Crime",
        id: Math.random(),
        rate: 8,
        cover: killbilltwo,
        cast: "Uma Thurman, David Carradine, Michael Madsen",
        release: "2004-04-16",
    },
    {
        title: "Reservoir Dogs",
        category: "Crime",
        id: Math.random(),
        rate: 7,
        cover: dogs,
        cast: "Harvey Keitel, Tim Roth, Michael Madsen",
        release: "1992-09-02",
    },
    {
        title: "Death Proof",
        category: "Action",
        id: Math.random(),
        rate: 6,
        cover: deathproof,
        cast: " Kurt Russell, Zoë Bell, Rosario Dawson ",
        release: "2007-05-31",
    },
    {
        title: "Training Day",
        category: "Action",
        id: Math.random(),
        rate: 7,
        cover: trainingday,
        cast: "Denzel Washington, Ethan Hawke, Scott Glenn",
        release: "2001-10-05",
    },
    {
        title: "Fences",
        category: "Drama",
        id: Math.random(),
        rate: 6,
        cover: fences,
        cast: " Denzel Washington, Viola Davis, Stephen McKinley Henderson",
        release: "2016-12-26",
    },
];
