"use client"
import React, { useState, useEffect } from 'react'
import FoodList from '@/components/FoodList'

const FavoritePage = () => {
  const [favorites, setFavorites] = useState([])

  useEffect(() => {
    const updateFavorites = () => {
      const storedFavorites = localStorage.getItem('favorites')
      console.log('Stored Favorites:', storedFavorites)
      if (storedFavorites) {
        const parsedFavorites = JSON.parse(storedFavorites)
        console.log('Parsed Favorites:', parsedFavorites)
        setFavorites(parsedFavorites)
      }
    }

    if (typeof window !== 'undefined') {
      updateFavorites()
      window.addEventListener('storage', updateFavorites)
      
      return () => {
        window.removeEventListener('storage', updateFavorites)
      }
    }
  }, [])

  useEffect(() => {
    console.log('Current favorites state:', favorites)
  }, [favorites])

  const addToFavorites = (food: string) => {
    const currentFavorites = JSON.parse(localStorage.getItem('favorites') || '[]')
    const newFavorites = [...currentFavorites, food]
    localStorage.setItem('favorites', JSON.stringify(newFavorites))
  }

  const removeFromFavorites = (foodId: string) => {
    const currentFavorites = JSON.parse(localStorage.getItem('favorites') || '[]')
    const newFavorites = currentFavorites.filter((food: any) => food.id !== foodId)
    localStorage.setItem('favorites', JSON.stringify(newFavorites))
  }

  return (
    <div className="containers" style={{display:"flex", flexDirection:"column", gap:"1rem"}}>
      <h1 style={{padding:"1rem",margin:"1rem",borderRadius:"8px",fontSize:"20px",fontWeight:"700"}}>Favorite Foods</h1>
      {Array.isArray(favorites) && favorites.length > 0 ? (
        <FoodList list={favorites} />
      ) : (
        <p>No favorite foods yet!</p>
      )}
    </div>
  )
}

export default FavoritePage
